// import React, { useState } from 'react'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'
// import MenuItem from '@material-ui/core/MenuItem'
// import InputLabel from '@material-ui/core/InputLabel'
// import makeStyles from '@material-ui/core/styles/makeStyles'
// import { familyMembers, rob, laura, jesse, ashlyn, chaz, elizabeth, emily } from '../../DataFiles/FamilyMembers'
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
//     select: {
//         minWidth: '200px',
//     },
//     text: {
//         paddingLeft: '10px'
//     },
// }))
//
// const FamilyDropdown = () => {
//     const [person, setPerson] = useState()
//     const [person2, setPerson2] = useState()
//     const classes = useStyles()
//
//     return (
//         <div className={classes.root}>
//             <FormControl className={classes.select}>
//                 <InputLabel className={classes.text} value="My Family">My Family</InputLabel>
//                 <Select
//                     id="select1"
//                     value={person}
//                     onChange={(e) => {
//                         setPerson(e.target.value)
//                         console.log('value', e.target.value)
//                     }}
//                 >
//                     {familyMembers.map((i) => (
//                         <MenuItem key={i.id} value={i.name}>
//                             {i.name}
//                         </MenuItem>
//                     ))}
//                 </Select>
//                 <Select
//                     id="select2"
//                     value={person2}
//                     onChange={(e) => (
//                         setPerson2(e.target.value)
//                     )}
//                 >
//                     { person === 'Chastin Egbert' ? chaz.map((m) => (
//                         <MenuItem key={m.id} value={m.name}>
//                             {`${m.name} (${m.relation})`}
//                         </MenuItem>
//                     ))
//                         : <MenuItem />}
//                     { person === 'Laura Coombs'
//                         ? laura.map((m) => (
//                             <MenuItem key={m.id} value={m.name}>
//                                 {`${m.name} (${m.relation})`}
//                             </MenuItem>
//                         ))
//                         : <MenuItem />}
//                     { person === 'Rob Egbert'
//                         ? rob.map((m) => (
//                             <MenuItem key={m.id} value={m.name}>
//                                 {`${m.name} (${m.relation})`}
//                             </MenuItem>
//                         ))
//                         : <MenuItem />}
//                     { person === 'Jesse Egbert'
//                         ? jesse.map((m) => (
//                             <MenuItem key={m.id} value={m.name}>
//                                 {`${m.name} (${m.relation})`}
//                             </MenuItem>
//                         ))
//                         : <MenuItem />}
//                     { person === 'Emily Chambers'
//                         ? emily.map((m) => (
//                             <MenuItem key={m.id} value={m.name}>
//                                 {`${m.name} (${m.relation})`}
//                             </MenuItem>
//                         ))
//                         : <MenuItem />}
//                     { person === 'Elizabeth Davis'
//                         ? elizabeth.map((m) => (
//                             <MenuItem key={m.id} value={m.name}>
//                                 {`${m.name} (${m.relation})`}
//                             </MenuItem>
//                         ))
//                         : <MenuItem />}
//                     { person === 'Ashlyn Warren'
//                         ? ashlyn.map((m) => (
//                             <MenuItem key={m.id} value={m.name}>
//                                 {`${m.name} (${m.relation})`}
//                             </MenuItem>
//                         ))
//                         : <MenuItem />}
//                 </Select>
//             </FormControl>
//         </div>
//     )
// }
//
// export default FamilyDropdown
