puts "🌱Resetting database... 🌱"
    User.destroy_all
    Entry.destroy_all

puts "🌱 Seeding Users... 🌱"
    user1 = User.create(username: "Shannon", password: "hexi")
    user2 = User.create(username: "Kiri", password: "meow")
    puts "🌱🌱 Users seeded successfully! 🌱🌱"

puts "🌱 Seeding Entries...🌱"
    entry1 = Entry.create(user_id: user1.id, title: "Finished my phase 5 project!", body: "Onto the science fair!")
    entry2 = Entry.create(user_id: user2.id, title: "Meow!", body: "Meow meow meow")
    puts "🌱🌱 Entries seeded successfully! 🌱🌱"

puts "🌱🌱🌱🌱 Done seeding! 🌱🌱🌱🌱"