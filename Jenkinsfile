pipeline {
    agent any
    stages {
            stage('checkout') {
                steps {
                git url: "https://github.com/vamshireddy24/varasiddha"
                }
            }
            stage('Mvn-Build') {
                steps {
                    script {
                    def mavenHome = tool name: "maven", type: "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} clean package"
                    }
                }
            }
        
            stage('Sonar-Test') {
                steps {
                    script {
                withSonarQubeEnv('mysonar')
                    def mavenHome = tool name: "maven", type: "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} sonar:sonar"   
                    }
                }
            }
    }
}
