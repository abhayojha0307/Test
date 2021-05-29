import React from 'react';
import firebase from '../firebase';
class Alldetails extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {studentslist : [], Account:[] }
    }
    
  componentDidMount() {
   
   
     
      firebase.database().ref("Users").on("value", snapshot => {
        let Accountlist = [];
        let AccountData=[];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            
            Accountlist.push(snap.val());
        });
        this.setState({ Accountlist: Accountlist});
        for(let i=0;i<Accountlist.length;i++)
        {
            AccountData.push(Accountlist[i].AccountInfo)
            
        }
        this.setState({Account:AccountData})
      }); 
 }
  
  render(){
  return (
    <div className="MainDiv">
      <div className="container">
          <table id="example" class="display table  table-striped">
            <thead class="thead-dark ">
                <tr>
                    <th>UserName</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Age Group</th>
                    <th>Enable/Disabled</th>
                </tr>
            </thead>
            <tbody>
            {this.state.Account.map(data => {
                
                return (
                    <tr>     
                    <td>{data.userName}</td>
                    <td>{data.userGender}</td>
                    <td>{data.userEmail}</td>
                    <td></td>
                    <td>{data.userAgeGroup}</td>
                    <td></td>
                    </tr>
                    
                );
               
                })}
            
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
export default Alldetails;