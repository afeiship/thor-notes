require "thor"
 
class MyCLI < Thor

  desc "hello NAME", "say hello to NAME"
  option :from
  def hello(name)
    puts "Hello #{name}, from - #{options[:from]}"
  end
  

end
 
MyCLI.start(ARGV)