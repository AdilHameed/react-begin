import React, { Component } from 'react';
import { Card, CardImg,CardText, CardBody,
    CardTitle, ListGroup, ListGroupItemText} from 'reactstrap';

   export default class SelectedDish extends Component
   {
     
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    renderDish(dish)
    {
        if(dish != null)
        {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    showComment(dish)
        {

        if(dish != null && dish.comments != null)
        {
           const dishComment = dish.comments.map((com)=>{
         
            return(
                <div>
                    
                    <ListGroup key={com.id}>
                   
                        <ListGroupItemText>{com.comment}</ListGroupItemText>
                        <ListGroupItemText>--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</ListGroupItemText>
                    
                    </ListGroup>
                </div>
            );
          
        });
        return(
            
            
            <div>
            <h4>Comments</h4>
               {dishComment}
            </div>
        
        );
    }else{
        return(<div></div>)
    }
}
    
    render()
    {
       
        
    
        return(
            <div className='container'>
            <div className='row'>
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                    </div>
                  <div className="col-12 col-md-5 m-1">
                   {this.showComment(this.props.selectedDish)}
                 </div>
            </div>
            </div>
        
             
               

        );
    }

   }