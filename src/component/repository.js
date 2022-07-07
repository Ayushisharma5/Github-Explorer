import React from 'react'
import "./repository.css"

const Repository=({user,repo})=>(
    <div className='repo'>
    <div>
        <div className='title'>
           <i className='fa fa-book pr-1'/>
           <a 
           className='descp'
           target ="blank"
           rel='noreffer noopener'
           href={`https://github.com/${repo.full_name}`}>
            <span>{repo.name}</span>
            </a>
       </div>
        <span className='desc'>{repo.description}</span>
    </div>
    <div className='d-flex'>
        <div className='subitem'>
            <i className='fa fa-code pr-1'/>
            <span>{repo.language}</span>
        </div>
        <div className='subitem'>
            <i className='fa fa-star pr-1'/>
            <span>{repo.stargazers_count}</span>
        </div>
        <div className='subitem'>
            <i className='fa fa-code-fork pr-1'/>
            <span>{repo.forks_count}</span>
        </div>
    </div>

</div>
    )


export default Repository