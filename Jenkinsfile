pipeline {
    agent any
    stages {
        node{
            stage('checkout') {
                git url: "https://github.com/vamshireddy24/varasiddha"
            }

            stage('Mvn-Build') {
                steps {
                    def mavenHome = tool "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} clean package"
                }
            }
        }
        node {
            stage('Sonar-Test') {
                withSonarQubeEnv('mysonar')
                {
                    def mavenHome = tool "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} sonar:sonar"
                }
            }
        }
    }
}
