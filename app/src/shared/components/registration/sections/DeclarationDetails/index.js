import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from '../shared/utils/use-styles';
import TwoDControlSelect from 'shared/components/dimensional-form-control-select/2D-form-control-select';
import ThreeDControlSelect from 'shared/components/dimensional-form-control-select/3D-form-control-select';
import TwoDTextField from 'shared/components/dimensional-text-fields/2D-text-field';
import ThreeDTextField from 'shared/components/dimensional-text-fields/3D-text-field';
import Signature from 'shared/components/signature';

const highSchoolSeniorCertificates = [
    "",
    "Full Exeption",
    "Ordinary Conditional Exemption Mature",
    "Age Conditional Exemption",
    "Grade 11 final",
    "Grade 11 mid-final",
    "Grade 12 final",
    "Previous Qualification",
    "Recognition of Prior Learning (RPL)"
]

const AcademicHistory = ({
    declarationDetails,
    setDeclarationDetails
}) => {
    const classes = useStyles();

    /*

    const [declarationDetails, setDeclarationDetails] = useState({
    applicantDeclaration: {
      fullName: '',
      IdorPassportNumber: '',
      applicantSignature:{
        signatureInitials: '',
        date: ''
      },
      witnessSignature:{
        signatureInitials: '',
        date: ''
      },
      parentOrGuardianDetailsSignature:{
        signatureInitials: '',
        date: ''
      }
    },
    benifactorDeclaration:{
      signature:{
        signatureInitials: '',
        date: ''
      },
      idNumber: ''
    }
  })


    */
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <TwoDTextField
                            type="text"
                            field1={'benifactorDeclaration'}
                            field2={'fullName'}
                            placeholder={"Full name"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                        <TwoDTextField
                            type="number"
                            field1={'applicantDeclaration'}
                            field2={'IdorPassportNumber'}
                            placeholder={"ID / Passport number"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Signature
                            field1={'applicantDeclaration'}
                            field2={'applicantSignature'}
                            placeholder={"Applicant Signature Initials"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Signature
                            field1={'applicantDeclaration'}
                            field2={'witnessSignature'}
                            placeholder={"Witness Signature Initials"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Signature
                            field1={'applicantDeclaration'}
                            field2={'parentOrGuardianDetailsSignature'}
                            placeholder={"Parent / Guardian Signature Initials"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                    <TwoDTextField
                            type="number"
                            field1={'benifactorDeclaration'}
                            field2={'idNumber'}
                            placeholder={"ID Number"}
                            helperText={'Benifactor Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                        <Signature
                            field1={'benifactorDeclaration'}
                            field2={'signature'}
                            placeholder={"Benifactor Signature Initials"}
                            helperText={'Benifactor Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default AcademicHistory;