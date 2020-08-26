# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Route.delete_all

############### USERS #################
demo = { email: 'DemoUser@demo.com', password: 'password', first_name: 'Demo', last_name: 'User', date_of_birth: '01-01-1920', gender: 'male' }
User.create!(demo)

demo_friend = { email: 'DemoFriend@demo.com', password: 'password', first_name: 'Friends', last_name: 'Happy', date_of_birth: '11-05-2000', gender: 'female' }
User.create!(demo_friend)

more_demo_friends = { email: 'MoreFriends@demo.com', password: 'password', first_name: 'More', last_name: 'Friends', date_of_birth: '20-02-1970', gender: 'male' }
User.create!(more_demo_friends)

one_more = { email: 'friendly@demo.com', password: 'password', first_name: 'something', last_name: 'last', date_of_birth: '20-07-1990', gender: 'female' }
User.create!(one_more)

############### ROUTES #################

ggp_route = { name: 'golden gate park jog', creator_id: demo.id, distance: '0.9 MI', description: 'Nice peaceful run through GGP!', waypoints: '[{"lat":37.765366,"lng":-122.491022},{"lat":37.768382,"lng":-122.484927},{"lat":37.7659,"lng":-122.478344}]', activity: "Run" }
Route.create!(ggp_route)

test_route1 = { name: 'Run through city', creator_id: demo.id, distance: '4.7 MI', description: 'Random test Route', waypoints: "[{\"lat\":37.79466608207805,\"lng\":-122.43397003173827},{\"lat\":37.760746076774204,\"lng\":-122.44993453979491},{\"lat\":37.747037980949024,\"lng\":-122.42710357666014}]", activity: "Bike Ride"}
Route.create!(test_route1)

test_route2 = { name: 'Test Route', creator_id: demo_friend[id], distance: '5.4 MI', description: 'Doesnt\'matter', waypoints: "[{\"lat\":37.79175381254094,\"lng\":-122.43791824340819},{\"lat\":37.776151928302426,\"lng\":-122.45662933349608},{\"lat\":37.766653516758375,\"lng\":-122.42109542846678}]", activity: "Walk"}
Route.create!(test_route2)

test_route3 = { name: 'Cool Walk', creator_id: demo_friend[id], distance: '3.0 MI', description: 'Walk along the beach', waypoints: "[{\"lat\":37.7703919717746,\"lng\":-122.51086519492901},{\"lat\":37.72772092071647,\"lng\":-122.50673750065698}]", activity: "Walk"}
Route.create!(test_route3)

lake_merced = { name: 'lake merced jog', creator_id: demo.id, distance: '2.2 MI', description: 'Great short run at Lake Merced', waypoints: '[{"lat":37.708428,"lng":-122.485855},{"lat":37.729603,"lng":-122.493640}]', activity: 'Run' }
Route.create!(lake_merced)

############## FRIENDS #################

friendship1 = { user_id: demo.id, friend_id: demo_friend.id }
Friend.create!(friendship1)
friendship2 = { user_id: demo.id, friend_id: more_demo_friends.id }
Friend.create!(friendship2)
friendship3 = { user_id: demo.id, friend_id: one_more.id }
Friend.create!(friendship3)
friendship4 = { user_id: demo.id, friend_id: demo_friend.id }
Friend.create!(friendship4)
friendship5 = { user_id: demo_friend.id, friend_id: demo.id }
Friend.create!(friendship5)
friendship6 = { user_id: demo_friend.id, friend_id: one_more.id }
Friend.create!(friendship6)
friendship7 = { user_id: more_demo_friends.id, friend_id: demo.id }
Friend.create!(friendship7)
