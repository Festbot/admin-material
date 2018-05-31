import React, { Component } from 'react'
import { FileInput,FileField} from 'react-admin';
import parse from 'csv-parse/lib/sync'
import reduxForm from 'redux-form/lib/reduxForm';

export class ProgramUploader extends Component {
  state={
    programSource:[]
  }
  csvParser = (file) =>{
    const reader = new FileReader();
    reader.addEventListener(
			'load',
			() => {
        const records = parse(reader.result,{columns: true});
        this.setState({ programSource: records });
        console.log(records)
			},
			false
		);

		reader.readAsText(file.rawFile);

  }

  render() {

    let uploadPreview =""
    let previewRecords=this.state.programSource.slice(0,5)
    const recordCount = (this.state.programSource.length>0) ? <h3>{this.state.programSource.length} event record found.</h3> :<h3>You can upload a csv file for batch event upload.</h3>
    uploadPreview = previewRecords.map((programItem,i) =>{
      return (
        <div>
        <table style={{width: "100%", border: "1px solid grey"}}>
        <tr>
        <td>{programItem["Artist or Band name"]}</td>
        <td>{programItem["Stage"]}</td>
        <td>{programItem["Start year"]+"."+programItem["Start month"]+"."+programItem["Start day"]}</td>
        </tr>
        </table> 
        </div>
      )
    });


    return (
      <div>
      <FileInput source="files" label="Related files" accept="text/csv" parse={this.csvParser}>
        <FileField source="src" title="title" />
      </FileInput>
      {(this.state.programSource.length>0) ? <h3>Preview</h3> :null}
      {uploadPreview}
      {recordCount}
      </div>
    )
  }
}

export default ProgramUploader
