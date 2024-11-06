import { toast } from 'react-toastify';

// get all gadget from local storage
const getAllfavorites = () =>{
    const all =localStorage.getItem('favorites')
   
    if (all) {
        const favorite = JSON.parse(all)
        
        return favorite
    }else{
        console.log([])
        return []
    }
}

// add a gadget add to cart to local storage

const addFavorite = (gadget) => {
    
    const favorites = getAllfavorites()
    const isExist = favorites.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('This item already exist')
    favorites.push(gadget)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully Added in shopping cart')
}
 
//This is for love section
const getAlllove = () =>{
    const alll =localStorage.getItem('loves')
   
    if (alll) {
        const love = JSON.parse(alll)
        
        return love
    }else{
        console.log([])
        return []
    }
}

// add a gadget in love icons
const addlove =(gadget) => {
   

   const loves = getAlllove()
    const isExist = loves.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('This item already exist')
    loves.push(gadget)
    localStorage.setItem('loves', JSON.stringify(loves))
    toast.success('Successfully Added in shopping cart')
}




export{addFavorite,getAllfavorites,addlove,getAlllove}