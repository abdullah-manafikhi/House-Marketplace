import {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {collection , getDocs , query , where , orderBy , limit , startAfter} from 'firebase/firestore'
import {db} from '../../firebase.config'
import toast from 'react-toastify'


function Category() {

    const [loading, setLoading] = useState(true)
    const [listing, setListing] = useState(null)

    const params = useParams()

    useEffect(() => {
        const fetchListings = async () => {
            try{
                //get refrence
               const listingRef = collection(db , 'Listings')
                console.log(listingRef)
               //create query
               console.log(params.categoryname)
               const q = query(
                   listingRef,
                   where('type' , '==' , params.categoryname),
                   orderBy('timstamps' , 'desc'),
                   limit(10)
               )
                console.log(q)
               const querySnap = await getDocs(listingRef)

               console.log(querySnap)
              
            }
            catch(error){
                console.log(error)
            }
        }
        fetchListings()
    })
    
  return (
    <div>
      
    </div>
  )
}

export default Category
