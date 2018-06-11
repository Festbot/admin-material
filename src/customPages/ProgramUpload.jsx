import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ViewTitle, SimpleForm } from 'react-admin';
import ProgramUploader from '../customFields/ProgramUploader';

const ProgramUpload = () => (
	<Card>
		<ViewTitle title="Program Upload" />
		<CardContent>
			<SimpleForm>
				<ProgramUploader />
			</SimpleForm>
		</CardContent>
	</Card>
);

export default ProgramUpload;
