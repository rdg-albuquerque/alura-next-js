import Link from 'next/link'
import FAQScreen from '../src/screens/FaqScreen/FaqScreen'

export default FAQScreen

// export async function getStaticProps () {
//     const response = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
//     const faq = await response.json()

//     console.log('rodou no build')

//     return {
//         props: {faq}
//     }
// }

// const Faq = ({faq}) => {
//     console.log('faq')
//     return (
//         <div>
//             <h1>Faq</h1>
//             <Link href="/">
//                 Home
//             </Link>
//             <ul>
//                 {faq.map((item, index) => (
//                     <li key={index}>
//                         {item.question} <br />
//                         {item.answer}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Faq