import axios from 'axios'
import marked from 'marked'

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Accept': 'application/vnd.github.v3.raw'
    }
})

export async function getRepositories() {
    try {
        const response = await api.get('/users/gfoliver/repos?sort=pushed')

        return {
            status: true,
            projects: response.data
        }
    }
    catch(error) {
        return {
            status: false,
            error
        }
    }
}

export async function getMarkdown(repo) {
    try {
        const response = await api.get(`/repos/gfoliver/${repo}/readme`)

        return {
            status: true,
            data: marked(response.data, {
                xhtml: true
            })
        }
    }
    catch(error) {
        return {
            status: false,
            error
        }
    }
}