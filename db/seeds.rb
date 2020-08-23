# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Route.destroy_all

demo = { email: 'DemoUser@demo.com', password: 'password', first_name: 'Demo', last_name: 'User', date_of_birth: '01-01-1920', gender: 'male' }
demo = User.create!(demo)

ggp_route = { name: 'golden gate park jog', creator_id: demo.id, distance: '1.4 MI', description: 'Nice peaceful run through GGP!', waypoints: ['37.765366, -122.491022', '37.768382, -122.484927', '37.765900, -122.478344'] }
Route.create!(ggp_route)

lake_merced = { name: 'lake merced jog', creator_id: demo.id, distance: '2.2 MI', description: 'Great short run at Lake Merced', waypoints: ['37.708428, -122.485855', '37.729603, -122.493640'] }
Route.create!(lake_merced)
