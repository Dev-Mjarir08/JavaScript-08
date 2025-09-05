let num = 10;

const main_Func = () => {
    let num = 20;
    const sub_Func = () => {
        let num = 30;
        const subChild_func = () => {
            let num = 40;
            console.log(`Sub Child a : ${num}`);
        }
        subChild_func();
        console.log(`Sub Func a : ${num}`);
    }
    sub_Func();
    console.log(`Main FUnc a : ${num}`);
}
main_Func();
console.log(`Out side of main func a : ${num}`);