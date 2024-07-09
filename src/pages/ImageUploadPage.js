import BasicLayout from "../layouts/BasicLayout";
import React, {useState} from 'react';
import {
    Container,
    Typography,
    Button,
    TextField,
    Grid,
    Box,
    Card
} from '@mui/material';

const ImageUploadPage = (props) => {

    const [connectip, setIp] = useState('10.0.0.1');
    const [connectport, setPort] = useState('5001');
    const [receiveConnect, setConnectMessage] = useState('');

    const [imagepath, setImagePath] = useState('');
    const [receiveGetImage, setGetImageMessage] = useState('');
    const [imageName, setImageName] = useState('');

    const [sendFieldMessage, setMessage] = useState('');
    const [sendFieldData, setData] = useState('');
    const [receiveGet, setGetMessage] = useState('');
    const [receivePost, setPostMessage] = useState('');
    const [jsonResponse, setJsonResponse] = useState(null);

    const handleConnect = async () => {

    }

    const handleDisconnect = async () => {

    }

    const handleGetImage = async () => {

    }

    const sendData = async () => {

    }


    return(
        <BasicLayout props={props}>
            <Container>
                <Card sx={{
                    marginTop: '70px'
                }}>
                    <h5 className="font-weight-bolder">Data Upload</h5>

                    <Box mb={4}>
                        <Typography variant="h4" component="h2">Connect</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="IP Address"
                                    value={connectip}
                                    onChange={(e) => setIp(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Port"
                                    value={connectport}
                                    onChange={(e) => setPort(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={handleConnect}>Connect</Button>
                                <Button variant="outlined" color="secondary" onClick={handleDisconnect}
                                        style={{marginLeft: 8}}>Disconnect</Button>
                            </Grid>
                        </Grid>
                        <Typography variant="body1">Result of connect: {receiveConnect}</Typography>
                    </Box>

                    <Box mb={4}>
                        <Typography variant="h4" component="h2">Get Image</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            value={imagepath}
                            onChange={(e) => setImagePath(e.target.value)}
                            style={{marginBottom: 8}}
                        />
                        <Button variant="contained" color="primary" onClick={handleGetImage}>Get Image</Button>
                        <Typography variant="body1">Result of Get Image: {receiveGetImage}</Typography>
                        {imageName && <img src={imageName} alt="BMP"/>}
                    </Box>

                    <Box mb={4}>
                        <Typography variant="h4" component="h2">Send Message</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    value={sendFieldMessage}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Hex Data"
                                    value={sendFieldData}
                                    onChange={(e) => setData(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={sendData}>Send message to
                                    server</Button>
                            </Grid>
                        </Grid>
                        <Typography variant="body1">Response from server: {receivePost}</Typography>
                        {jsonResponse && <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>}
                    </Box>
                </Card>
            </Container>

        </BasicLayout>
    );
}
export default ImageUploadPage;