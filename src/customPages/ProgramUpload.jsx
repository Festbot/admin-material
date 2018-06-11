import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ViewTitle, SimpleForm } from 'react-admin';
import ProgramUploader from '../customFields/ProgramUploader';

const ProgramUpload = () => (
	<Card>
		<ViewTitle title="Program Upload" />
    <CardContent>
    <h2>Choose or create a new Venue</h2>
      <SimpleForm>
      {/* 
        
        Kell egy fesztival valaszto dropdown, ami listazza a Userhez tartozo fesztivalokat.

        vagy

        Kerjuk be az alap adatokat egy uj Fesztival letrehozasahoz 
      
      */}
				<ProgramUploader />
			</SimpleForm>
		</CardContent>
	</Card>
);

export default ProgramUpload;
