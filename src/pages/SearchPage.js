import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    TextField,
    Grid,
    Box,
    Toolbar
} from '@mui/material';
import 'flatpickr/dist/themes/material_blue.css';
import BasicLayout from "../layouts/BasicLayout";



const SearchPage = (props) =>{


    const [selectedProject, setSelectedProject] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedSourceCd, setSelectedSourceCd] = useState('');
    const [dataType, setDataType] = useState('');
    const [isTestset, setIsTestset] = useState('');
    const [selectedOrigin, setSelectedOrigin] = useState('');
    const [selectedPcbBoard, setSelectedPcbBoard] = useState('');
    const [date, setDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [totalItems, setTotalItems] = useState(0);


    const fetchArticles = (page) => {
        console.log(`Fetching articles for page ${page}`);
    };

    return (
        <BasicLayout props={props}>
            <Box component="main" sx={{ p: 2,
                marginTop: '60px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Toolbar />
                <Card>
                    <CardContent>
                        <h5 className="font-weight-bolder">DBMS Data Search</h5>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="project-label">Project</InputLabel>
                                    <Select
                                        labelId="project-label"
                                        id="choices-project"
                                        value={selectedProject}
                                        onChange={(e) => setSelectedProject(e.target.value)}
                                    >
                                        {/* 예시 프로젝트 데이터 */}
                                        {projects.map((project, index) => (
                                            <MenuItem key={index} value={project.value}>
                                                {project.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="sort-label">Sort</InputLabel>
                                    <Select
                                        labelId="sort-label"
                                        id="choices-sort"
                                        value={selectedSort}
                                        onChange={(e) => setSelectedSort(e.target.value)}
                                    >
                                        {/* 예시 정렬 데이터 */}
                                        {sorts.map((sort, index) => (
                                            <MenuItem key={index} value={sort.value}>
                                                {sort.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="source-label">Source</InputLabel>
                                    <Select
                                        labelId="source-label"
                                        id="choices-source"
                                        value={selectedSourceCd}
                                        onChange={(e) => setSelectedSourceCd(e.target.value)}
                                    >
                                        {/* 예시 소스 데이터 */}
                                        {sources.map((source, index) => (
                                            <MenuItem key={index} value={source.value}>
                                                {source.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <RadioGroup row value={dataType} onChange={(e) => setDataType(e.target.value)}>
                                        {/* 예시 타입 데이터 */}
                                        {types.map((type, index) => (
                                            <FormControlLabel
                                                key={index}
                                                value={type.value}
                                                control={<Radio />}
                                                label={type.text}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <RadioGroup row value={isTestset} onChange={(e) => setIsTestset(e.target.value)}>
                                        <FormControlLabel value="1" control={<Radio />} label="O" />
                                        <FormControlLabel value="0" control={<Radio />} label="X" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="origin-label">Origin</InputLabel>
                                    <Select
                                        labelId="origin-label"
                                        id="choices-origin"
                                        value={selectedOrigin}
                                        onChange={(e) => setSelectedOrigin(e.target.value)}
                                    >
                                        {/* 예시 원산지 데이터 */}
                                        {origins.map((origin, index) => (
                                            <MenuItem key={index} value={origin.value}>
                                                {origin.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="pcb-board-label">PCB Board</InputLabel>
                                    <Select
                                        labelId="pcb-board-label"
                                        id="choices-pcb_board"
                                        value={selectedPcbBoard}
                                        onChange={(e) => setSelectedPcbBoard(e.target.value)}
                                    >
                                        {/* 예시 PCB 보드 데이터 */}
                                        {pcbBoards.map((pcbBoard, index) => (
                                            <MenuItem key={index} value={pcbBoard.value}>
                                                {pcbBoard.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="취득일 Date 범위"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <TextField
                                        label="취득일 Date 범위"
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="파일명 포함 검색"
                                    placeholder="파일명 검색"
                                    value={imageTitle}
                                    onChange={(e) => setImageTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="mt-4">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {totalItems > 0 && <div>검색 데이터 개수: {totalItems}</div>}
                                    <Button variant="contained" color="primary" onClick={() => fetchArticles(1)}>
                                        검색
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
       </BasicLayout>
    );
}



export default SearchPage;

const projects = [
    { value: 'project1', text: 'Project 1' },
    { value: 'project2', text: 'Project 2' }
];

const sorts = [
    { value: 'sort1', text: 'Sort 1' },
    { value: 'sort2', text: 'Sort 2' }
];

const sources = [
    { value: 'source1', text: 'Source 1' },
    { value: 'source2', text: 'Source 2' }
];

const types = [
    { value: 'type1', text: 'Type 1' },
    { value: 'type2', text: 'Type 2' }
];

const origins = [
    { value: 'origin1', text: 'Origin 1' },
    { value: 'origin2', text: 'Origin 2' }
];

const pcbBoards = [
    { value: 'pcbBoard1', text: 'PCB Board 1' },
    { value: 'pcbBoard2', text: 'PCB Board 2' }
];