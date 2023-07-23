import React from "react";
import { Launch } from "../../launches/launch";
import"./styles.css";
import axios from "axios";

export class LaunchList extends React.Component{
    state={
             Launches:[]
          }
   
    componentDidMount=()=>{
                             this.getl();
                          }
    getl=()=>{
               axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
               this.setState(
                {
                  Launches:response.data
                }
            )
        }).catch((error)=>{
            console.log(error);
        })}


        launchList =() => {
            const launchListComponents=this.state.Launches.map((launch,index) => {

               const image=launch.links.flickr_images.length==0?'https://i.dailymail.co.uk/1s/2019/04/10/23/12120442-6909557-image-a-4_1554936933352.jpg':launch.links.flickr_images[0]
                return <Launch
                key={"launch_"+index}
                banner={image}
                 title={launch.mission_name} launch_date={launch.launch_date_local}
                  description={launch.details}
               />
            })
            return launchListComponents;
        }

        
      render(){
        
        return(
     <div className="components">
           
       {this.launchList()}
      </div>
        )
    }
}