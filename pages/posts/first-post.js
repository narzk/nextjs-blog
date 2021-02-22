// posts will be populated at build time by getStaticProps()
//  import image from './first.jpg'
function Blog() {

  // const arr=[{id:1, image: ''}]
    return (
/* <img src={image}/> */
<div></div>
  
    )
  }
  
  // // This function gets called at build time on server-side.
  // // It won't be called on client-side, so you can even do
  // // direct database queries. See the "Technical details" section.
  // export async function getStaticProps() {
  //   // Call an external API endpoint to get posts.
  //   // You can use any data fetching library
  //   const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  //   const posts = await res.json()
  
  //   // By returning { props: posts }, the Blog component
  //   // will receive `posts` as a prop at build time
  //   return {
  //     props: {
  //       posts,
  //     },
  //   }
  // }
  
  export default Blog