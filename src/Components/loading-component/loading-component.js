import React from 'react'
import classes from './loading-component.module.css'
import { Card, CircularProgress } from '@material-ui/core'

const LoadingComponent = () => {
    return (
        <div className={ classes.basicClass }>
            <Card className={ classes.secondaryParentItem }>
                <div style={{ display: 'flex', flexFlow: 'column', margin: 'auto' }}>
                    <CircularProgress style={{ marginBottom: '10px' }} />
                    Loading...
                </div>
            </Card>
        </div>
    )
}

export default LoadingComponent
