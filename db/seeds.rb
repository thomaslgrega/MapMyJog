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

ggp_route = { name: 'golden gate park jog', creator_id: demo.id, distance: '0.9 MI', description: 'Nice peaceful run through GGP!', waypoints: '[{"lat":37.765366,"lng":-122.491022},{"lat":37.768382,"lng":-122.484927},{"lat":37.7659,"lng":-122.478344}]', activity: "Run" }
Route.create!(ggp_route)

lake_merced = { name: 'lake merced jog', creator_id: demo.id, distance: '2.2 MI', description: 'Great short run at Lake Merced', waypoints: '[{"lat":37.708428,"lng":-122.485855},{"lat":37.729603,"lng":-122.493640}]', activity: 'Run' }
Route.create!(lake_merced)