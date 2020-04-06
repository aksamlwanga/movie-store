import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    Menu as MenuIcon, Search as SearchIcon, Mail as MailIcon, Notifications as NotificationsIcon,
    More as MoreIcon, AccountCircle
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        }

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

type Props={
    movies:any,
    setMovies:any
}

export const Header: React.FC<Props> = props => {
    const[inputVal,setInputVal]=useState<string>('')
    const styles = useStyles();

    function updateMovies(search:string){
        setInputVal(search)
        props.setMovies(props.movies.filter((movie:any)=>movie.title.toLowerCase().includes(search)))
    }
    return (

        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Sharifah's Movies Store
            </Typography>
                    <div className={styles.search}>
                        <div className={styles.searchIcon} >
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: styles.inputRoot,
                                input: styles.inputInput,
                            }}
                            onChange={e =>updateMovies(e.target.value)}
                            value={inputVal}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div style={{ flexGrow: 1 }} />
                    <div >

                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={}
                            aria-haspopup="true"
                            // onClick={}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            aria-label="show more"
                            // aria-controls={}
                            aria-haspopup="true"
                            // onClick={}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    )
}