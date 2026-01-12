pipeline {
    agent any
    tools {
        nodejs 'node18' // Make sure this matches Jenkins Global Tool
    }
    stages {
        stage('Debug Info') {
            steps {
                echo "Checking workspace and Node"
                sh 'pwd'
                sh 'ls -la'
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Verify Build') {
            steps {
                sh 'ls -la build || echo "Build folder not found"'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}
