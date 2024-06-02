import data from '../../artigos.json'

export default function Home(){
    console.log(data)
    return (
        <div className='grid grid-cols-3'>
        {
            (data.map)(
                (filme, index) =>(
                    <>
                    <div className='card bg-black text-white mt-4 m-3 rounded-lg flex flex-col' key={index}>
                        <h1 className='text-2xl m-2 mb-3'>{filme.title}</h1>
                        <img className='w-full mb-5' src={filme.image}/>
                        <div className='tags'>
                            {
                                filme.tags.map(tag =>(
                                    <span className='bg-[#0DC40A8A] text-white p-1 m-2 rounded-lg ml-4 text-center' key={tag}>{tag}</span>
                            ))
                            }
                            <div className='texto'>
                                {
                                    filme.text.map(text =>(
                                        <span className='flex flex-row m-3.5 text-xl' key={text}>{text}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    </>
                    )
                )
            }
        </div>
    )
}