require 'uglifier'

File.open("emailscript.min.js", "w") do |file|
    file.write Uglifier.compile(File.read("emailscript.js"))
end
