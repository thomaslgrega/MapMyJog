# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = { email: 'DemoUser@demo.com', password: 'password', first_name: 'Demo', last_name: 'User', date_of_birth: '01-01-1920', gender: 'male' }
User.create(demo)

ggp_route = { name: 'golden gate park jog', distance: '', description: 'Nice peaceful run through GGP!', waypoints: ['37.765366, -122.491022', '37.768382, -122.484927', '37.765900, -122.478344'] }
