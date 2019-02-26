require 'pry'

# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
days = %w{ monday tuesday wednesday thursday friday saturday sunday }
p days # this is the programmers print: preserves quotes, square brackets etc.



# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# moving_day = days.pop
# days.unshift(moving_day)

# OR moving_day = days.unshift(days.pop)

# Rubyish way
days.rotate! -1

p days


# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

day_parts = [ days[1..5], days.rotate.drop(5) ]

p day_parts


# 4. Remove either the weekdays or the weekends
# Your choice...
#

day_parts.pop
p day_parts



# 5. Sort the remaining days alphabetically

p day_parts.flatten.sort



# binding.pry
