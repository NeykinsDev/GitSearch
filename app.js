const searchInput= document.getElementById('search-form') 
const month =[ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

const profilePicture=document.getElementById('profile-picture')
const profileName=document.getElementById('profile-name')
const profileNickName=document.getElementById('profile-nickname')
const joinDate=document.getElementById('join-date')
const repositories=document.getElementById('nbr-repos')
const followers=document.getElementById('nbr-followers')
const following=document.getElementById('nbr-following')
const workplace=document.getElementById('user-workplace')
const website=document.getElementById('website')
const twitter=document.getElementById('user-twitter')
const userLocation=document.getElementById('user-location')
const userBio=document.getElementById('profile-bio')




//Fetching octocat
fetch('https://api.github.com/users/octocat')
    .then((result)=> result.json())
    .then((data)=>{
        profilePicture.src=data.avatar_url
        profileName.innerText=data.name
        profileNickName.innerText=`@${data.login}`
        datesegments = data.created_at.split("T").shift().split("-")
        joinDate.innerText = `Joined ${datesegments[2]} ${month[datesegments[1]-1]} ${datesegments[0]}`
        //joinDate.innerText=data.created_at
        repositories.innerText=data.public_repos
        followers.innerText=data.followers
        following.innerText=data.following
        if(data.company!==null){
            workplace.innerText=data.company
        }
        else{
            workplace.innerText="Not available"
        }
        if(data.blog!==null){
            website.innerText=data.blog
        }
        else{
            website.innerText="Not available"
        }
        if(data.twitter_username!== null){
            twitter.innerText=data.twitter_username
        }
        else{
            twitter.innerText="Not available"
        }
        
        if(data.location!==null){
            userLocation.innerText=data.location
        }
        else{
            userLocation.innerText="Not available"
        }
        if(data.bio!== null){
            userBio.innerText=data.bio
        }
        else{
            userBio.innerText="This user has no bio"
        }
        
    })






searchInput.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const user= document.getElementById('search').value


    fetch('https://api.github.com/users/'+user)
    .then((result)=> result.json())
    .then((data)=>{
        console.log(data)
        if(data.message=== undefined ||data.message!=="Not Found"){
            profilePicture.src=data.avatar_url
            if(data.name!== null){
                profileName.innerText=data.name
            }
            else{
                profileName.innerText="Not available"
            }
           
            profileNickName.innerText=`@${data.login}`
            datesegments = data.created_at.split("T").shift().split("-")
            joinDate.innerText = `Joined ${datesegments[2]} ${month[datesegments[1]-1]} ${datesegments[0]}`
            repositories.innerText=data.public_repos
            followers.innerText=data.followers
            following.innerText=data.following
            if(data.company!==null){
                workplace.innerText=data.company
            }
            else{
                workplace.innerText="Not available"
            }
            if(data.blog!==""){
                website.innerText=data.blog
            }
            else{
                website.innerText="Not available"
            }
            if(data.twitter_username!== null){
                twitter.innerText=data.twitter_username
            }
            else{
                twitter.innerText="Not available"
            }
            
            if(data.location!==null){
                userLocation.innerText=data.location
            }
            else{
                userLocation.innerText="Not available"
            }
            if(data.bio!== null){
                userBio.innerText=data.bio
            }
            else{
                userBio.innerText="This user has no bio"
            }
        }
        else{
            alert("This user does not exist")
        }
    })

    document.getElementById('search').value=null
})