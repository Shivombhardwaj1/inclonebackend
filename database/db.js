import mongoose from 'mongoose';

const Connection = async (username,password) => {
    const URL =  `mongodb://${username}:${password}@ac-tctgi5e-shard-00-00.fdujv2k.mongodb.net:27017,ac-tctgi5e-shard-00-01.fdujv2k.mongodb.net:27017,ac-tctgi5e-shard-00-02.fdujv2k.mongodb.net:27017/?ssl=true&replicaSet=atlas-d7hzic-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {   

        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;