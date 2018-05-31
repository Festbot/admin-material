import React, { Component } from 'react';
import { FileInput, FileField } from 'react-admin';
import parse from 'csv-parse/lib/sync';
import reduxForm from 'redux-form/lib/reduxForm';

export class ProgramUploader extends Component {
	state = {
		programSource: []
	};
	csvParser = file => {
		const reader = new FileReader();
		reader.addEventListener(
			'load',
			() => {
				const records = parse(reader.result, { columns: true });
				this.setState({ programSource: records });
				console.log(records);
			},
			false
		);

		reader.readAsText(file.rawFile);
	};

	render() {
		let uploadPreview = '';
		let previewRecords = this.state.programSource.slice(0, 5);
		uploadPreview = previewRecords.map((programItem, i) => {
			return (
				<tr>
					<td style={{ borderBottom: '1px solid grey' }}>{programItem['Artist or Band name']}</td>
					<td style={{ borderBottom: '1px solid grey' }}>{programItem['Stage']}</td>
					<td style={{ borderBottom: '1px solid grey' }}>
						{programItem['Start year'] + '.' + programItem['Start month'] + '.' + programItem['Start day']}
					</td>
				</tr>
			);
		});

		return (
			<div>
				<FileInput source="files" label="Related files" accept="text/csv" parse={this.csvParser}>
					<FileField source="src" title="title" />
				</FileInput>

				{this.state.programSource.length > 0 ? <h3>Preview</h3> : null}
				<table style={{ width: '100%' }}>{uploadPreview}</table>
				{this.state.programSource.length > 0 ? (
					<h3>{this.state.programSource.length} event record found.</h3>
				) : (
					<h3>You can upload a csv file for batch event upload.</h3>
				)}
			</div>
		);
	}
}

export default ProgramUploader;
