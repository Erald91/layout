import React, {Component} from "react";

class AddMovies extends Component {
    render (){
        return(
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add Movies</h4>
            </div>
            <div className="modal-body">
                <input type="text" name="ID" value="" />
                <input type="text" name="Name" value="" />
                <input type="text" name="Release" value="" />
                <input type="text" name="Type" value="" />
                <input type="text" name="Provider" value="" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>

  </div>
</div>
        );
    }
}
export default AddMovies;