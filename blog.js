// names=['ana','budi','mita','ayu'];
// console.log(names)

// let nama1={
//     nama:'ana',
//     alamat:'jakarta',
//     email:'ana@gmail.com',
//     NoHp:0123456789,
//     'golongan darah':'A',
// }
// console.log(nama1['golongan darah'])

// let allData=[
    
//     {nama:'anam',
//     alamat:'karet',
//     noHp:012345678},

//     {nama:'ana',
//     alamat:'jakarta',
//     email:'ana@gmail.com',
//     NoHp:0123456789},

// ]
// console.log(allData)

let blogs=[]
function addBlog(event) {
    event.preventDefault()
    
    let title=document.getElementById('input-blog-title').value
    let content=document.getElementById('input-blog-content').value
    let image= document.getElementById('input-blog-image')
    image=URL.createObjectURL(image.files[0])
    
    let blog={
        title: title,
        content:content,
        image:image,
        postAt:new Date(),
        author:'afif munajat'
    }
    
    blogs.push(blog)
    renderBlog()
     
    
}
function renderBlog() {
    let contentContainer=document.getElementById('contents');
    contentContainer.innerHTML=''
    for (let i = 0; i < blogs.length; i++) {
        contentContainer.innerHTML +=`<div class="blog-list-item">
                                    <div class="blog-image">
                                    <img src="${blogs[i].image}" alt="" />
                                    </div>
                                    <div class="blog-content">
                                    <div class="btn-group">
                                        <button class="btn-edit">Edit Post</button>
                                        <button class="btn-post">Post Blog</button>
                                    </div>
                                    <h1>
                                        <a href="blog-detail.html" target="_blank"
                                        >${blogs[i].title}</a
                                        >
                                    </h1>
                                    <div class="detail-blog-content">
                                        ${getFullTime(blogs[i].postAt)}|${blogs[i].author}
                                    </div>
                                    <p>${blogs[i].content}</p>
                                    <div style="text-align: right;
                                        color: gray;"> ${getDistanceTime(blogs[i].postAt)}</div>
                                    </div>
                                    </div>
                                </div>`
      
    }

}
let mounth=[
    'januari',
    'februari',
    'maret',
    'april',
    'mei',
    'juni',
    'juli',
    'agustus',
    'september',
    'oktober',
    'november',
    'desember'
]
function getFullTime(time) {
    
    
    let date=time.getDate()
   
    let mounthIndex=time.getMonth()
    let years=time.getFullYear()

    let hours= time.getHours()
    let minutes=time.getMinutes()

    let fulltime=`${date} ${mounth[mounthIndex]} ${years}${hours}:${minutes} wib`
    return fulltime
}
   function getDistanceTime(time) {
       let timePost=time
       
       let timeNow=new Date()
       

       let distance=timeNow-timePost
      
       
       let miliSecond=1000
       let secondHours=3600
       let hoursDay= 23

       
    let Day=Math.floor(distance / (miliSecond*secondHours*hoursDay))
    

       
       if (Day >=1) {
        
           console.log(`${Day} ago`)
            
           
       } else {
           
        let distanceHours=Math.floor(distance/(miliSecond*secondHours))
        if (distanceHours>=1) {
            console.log(`${distanceHours} hours ago`)
            
        }else{
            let distanceMinutes=Math.floor(distance/(miliSecond*60))
            if(distanceMinutes>=1){
                return`${distanceMinutes} minutes ago`
            }else{
                let hasil= Math.ceil(distance/miliSecond)
                return hasil
            }
            
        }
       }
       
   }
  setInterval(()=>{
      renderBlog()
  },1000)