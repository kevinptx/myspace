10.times do
  user = User.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "password",
    password_confirmation: "password",
    image: Faker::Avatar.image,
  )
  user.save!

  10.times do
    post = user.posts.new(
      first_name: user.first_name,
      last_name: user.last_name,
      body: Faker::Lorem.paragraph
    )
    post.save!
  end

  end
  
  puts "10 Users Created"