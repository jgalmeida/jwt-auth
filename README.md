=======
jwt-auth
========

POC using JWT to authenticate multiple services with angular and ruby

#### Instructions
	
**User service**
	
	cd user-service
    bundle
    bundle exec rackup -p 9001
	
	
**Todo service**
  cd todo-service
    bundle
    bundle exec rackup -p 9002


**Frontend**
  cd frontend
    npm install
    npm start

http://localhost:8000
