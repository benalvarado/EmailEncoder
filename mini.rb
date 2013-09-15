require 'uglifier'

File.open("emailencoder.min.js", "w") do |file|
    file.write Uglifier.compile(File.read("emailencoder.js"))
end
