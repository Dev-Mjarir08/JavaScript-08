const main_func = () => {
    console.log('Hello from Main Func.');
    const sub_func = () => {
        console.log('Hello from Sub Func.');
        const subChild_func = () => {
            console.log('Hello from Sub Child');
        }
        subChild_func();
    }
    sub_func();
}
main_func();