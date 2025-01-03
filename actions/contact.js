"use server"

async function create(state,formData){
    // console.log("test",formData);
    
    const name =formData.get('name')
    const email =formData.get('email')
    const subject =formData.get('subject')
    const text =formData.get('text')

    // console.log("test",name);

    if (name==='' || email==='' || subject==='' || text==='') {
        return{
            status:"error",
            message:"تمام موارد فرم تماس با ما اجباری است"
        }
    }
    
}

export {create}