function Hello(){

    let myName="Nishant";
    let number=456;


    let fullName = ()=>{
        return "Nishant Kumar"
    }
    return <h3>
        MessageNumber:{number} I am your master {fullName()}
    </h3>
}


export default Hello;