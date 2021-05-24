module.exports.time = async function(){
    try{
        let date = new Date();
        let hour = 60*60*1000;
        let curr_time = await date.getTime()/hour;
        curr_time = await Math.floor(curr_time);

        return curr_time;
    }catch(err){
        console.log('Error in time', err);
        return;
    }
}