import Search from '@mui/icons-material/Search'
// import { StaggeredGrid, StaggeredGridItem} from "react-staggered-grid";
// import Review from './Review';
// import { useSelector } from 'react-redux';

export default function ReviewsSection() {
        // const deviceType =  useSelector((state)=>state.webReducer.DeviceType);
        // const col = deviceType === "mobile"?1:deviceType ==="tablet"?2:3;
        // const images = [
        //   {
        //     name:"fufddfjdfv",
        //     review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro illo impedit soluta odit incidunt minus iusto.",
        //     type:'Excellent'
        //   },
        //   {
        //     name:"fufddfjdfv",
        //     review:"Lore facere? Similique enim, iure cum magni qui debitis labore, esse explicabo nobis rerum sit nemo id numquam laboriosam possimus vero!",
        //     type:'Excellent'
        //   },
        //   {
        //     name:"fufddfjdfv",
        //     review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro illo impedit soluta odit incidunt minus iusto. Ad quibusdam reprehenderit voluptatibus, sapiente cum suscipit eveniet ullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, esse explicabo nobis rerum sit nemo id numquam laboriosam possimus vero! f8uf8g9gweffeffefe",
        //     type:'Excellent'
        //   },
        //   {
        //     name:"fufddfjdfv",
        //     review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro illo impedit soluta odit incidunt minus iusto. Ad quibusdam reprehenderit voluptatibus, sapiente cum suscipit eveniet ullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, esse explicabo nobis rerum sit nemo id numquam laboriosam possimus vero!am reprehenderit voluptatibus, sapiente cum suscipit eveniet ullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, esse explicabo nobis rerum sit nemo id numqua",
        //     type:'Excellent'
        //   },
        //   {
        //     name:"fufddfjdfv",
        //     review:"Lorem ipsusse explicabo nobis ullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, e rerum sit nemo id numqua",
        //     type:'Excellent'
        //   },
        //   {
        //     name:"fufddfjdfv",
        //     review:"Lorem ipsusse explicabo noblabore, eullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, eullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, eullamis rerum sit nemo id numqua",
        //     type:'Excellent'
        //   },
        //   {
        //     name:"fufddfjdfv",
        //     review:"Lorem ipsusse explicabo ullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, eullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, eullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, eullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, eullam debitis nobis omnis architecto facere? Similique enim, iure cum magni qui debitis labore, enobis rerum sit nemo id numqua",
        //     type:'Excellent'
        //   },
        // ]
             
  return (
    <div>
      
      <div className=" sm:px-0 md:px-2 lg:px-5 w-full">
        <div className=" font-RobotoSlab text-clamp-h5 font-bold">Filter Customer Experiences </div>
        <div className="w-full sm:w-[80%] flex my-3 mx-auto  rounded-md sm:rounded-lg">
                <input type="text" placeholder='write something' className=' w-full px-5 py-3 font-Salsa rounded-md sm:rounded-lg outline-1 outline-gray-500 focus:outline-blue-600 my-1'/>
                <div className='px-3 md:px-5 py-3 text-center m-auto bg-blue-500 rounded-md ml-2'><Search /></div>
        </div>
        <div className=" shadow-lg  mt-3 lg:mt-9 h-[70vh]">

  

    <div className=" overflow-x-hidden overflow-y-auto h-full p-0 sm:p-3 no-scrollbar" >
      {/* <StaggeredGrid
        columns={col} // 0 would adjust columns
        alignment={1} // 0 : start , 1 : center , 2 : end
        horizontalGap={1} // horizontal gap between grid items
        fitHorizontalGap={true} // fit the gap with columnWidth
        
      >
        
        {  images.map((data, index) => (
          <StaggeredGridItem key={ index} index={index} >
            <Review {...data}/>
          </StaggeredGridItem>
        ))}
      </StaggeredGrid> */}
    </div>

        </div>
      </div>
    </div>
  )
}