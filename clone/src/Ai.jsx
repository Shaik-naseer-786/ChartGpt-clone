const {Configuration,OpenAIApi} =require('openapi');
const configuration=new Configuration({apiKey:"YOUR_KEY"});
const openai=new OpenAIApi(configuration);

export async function sendMsgToOpenAi(message){
    const res=await openai.createCompletion({
        model:'text:davinci-003',
        prompt:message,
        temperature:0.7,
        max_tokens:256,
        top_p:1,
        frequency_penality:0,
        presence_penality:0
    });
    return res.data.choices[0].text;
}