#!/usr/bin/env ruby
require 'json'

# Run this file to re-generate dungeon data HTML for the site.
# Only needed if you edit translation json files.

# ------ Helper Functions ------

# parse a JSON file and return data as a hash
def parse_json_file filename
  json_from_file = File.read(filename)
  data = JSON.parse(json_from_file)

  data
end

# assigns dungeon name and table data category
#  vvvvvv <- checks for this as key (categories.json) 
# アイテム：鍛錬の押入
#          ^^^^^^^^ <- checks for this as key (dungeon-names.json)
def name_and_category line
  groups = line.scan(/[^：|\s]*/)

  @table_data["Dungeon Name"] = @dungeons[groups[2]]
  @table_data["Table Category"] = @categories[groups[0]]
end

def number_of_spawns line
  groups = line.scan(/\S+/)
  @table_data["Number of Spawns"][groups[0]] = groups[2]
end

def item_shop_trap_header groups
    column_headers = []
    groups.each_with_index do |group, index|
      if index == 0
        column_headers.push("Name")
      else
        column_headers.push(group)
      end
    end
    @table_data["Headers"] = column_headers
end

def monster_header groups
  # nada
end

def monster_row groups
  # nada
end

def item_shop_trap_row groups
  item = []
  groups.each_with_index do |group, index|
    unless index == 0
      item.push(group)
    end
  end
  @table_data["Rows"][@items[groups[0]]] = item
end

def table_data line
  # skip if '出現率' or '通常店' is present, or if line is blank
  if line =~ /^[^出現率|通常店]+$/ and line =~ /\S/
    groups = line.scan(/[^\s]+/)
    # if '名' is present it's an item, shop, or trap table header row
    if groups[0] =~ /名/
      item_shop_trap_header(groups)
    # if '階層' is present it's a monster table header row
    elsif groups[0] =~ /階層/
      monster_header(groups)
    # if it's only digits or whitespace, it's a monster table row
# >>> CHECK THIS
    elsif groups[0] =~ /\d+/ or groups[0] =~ /^[^\S]+$/
      monster_row(groups)
    # otherwise it's an item, shop, or trap row
    else
      item_shop_trap_row(groups)
    end
  end
end

# ------ Main ------
@dungeons = parse_json_file('json/dungeon-names.json')
@categories = parse_json_file('json/categories.json')
@items = parse_json_file('json/item-names.json')

@spawns = {}
@table_data = {}
@table_data["Number of Spawns"] = {}
@table_data["Rows"] = {}
@number_of_spawns_flag = false
@table_data_flag = false

File.foreach('data/item-01').with_index do |line, i|
  # line 1 has dungeon name and table category ---
  if i == 0
    name_and_category(line)
  end

  # line 4 is the start of number of spawns data ---
  if i == 3
    @number_of_spawns_flag = true
  end
  if @number_of_spawns_flag
    # if 〜 is no longer present, we've moved past number of spawns data
    if line =~ /^[^〜]+$/
      @number_of_spawns_flag = false
      @table_data_flag = true
    else
      number_of_spawns(line)
    end
  end
  if @table_data_flag
    table_data(line)
  end
end

puts "Dungeon Name = #{@dname}"
puts "Category = #{@category}"
puts "Number of Spawns = #{@spawns}"
puts "Table Data = #{@table_data}"

puts "------------------------------"

puts "<h4>#{@table_data['Table Category']} Data</h4>"
# ------ spawn rate ------
puts '<p>Spawn Rate</p>'
puts '<table class="dungeon-table">'
puts '  <thead>'
puts '    <td>Floor</td>'
puts '    <td>Spawns</td>'
puts '  </thead>'
spawns = ''
@table_data["Number of Spawns"].each_with_index do |n, i|
  spawns += "  <tr>\n"
  spawns += "    <td>#{n[0]}</td>\n"
  spawns += "    <td>#{n[1]}</td>\n"
  spawns += "  </tr>\n"
end
puts spawns
# ------ items ------
puts "#{@table_data['Table Category']}|#{@table_data['Dungeon Name']}"
headers = ''
@table_data["Headers"].each_with_index do |h, i|
  if i+1 == @table_data["Headers"].length
    headers += "#{h}"
  else
    headers += "#{h}|"
  end
end
puts headers
