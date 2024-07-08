# You can change this base image to anything else
# But make sure to use the correct version of Java
# FROM adoptopenjdk/openjdk11:alpine-jre

# # Simply the artifact path
# ARG artifact=target/varasidha-1.0-SNAPSHOT.war

# WORKDIR /opt/app

# COPY ${artifact} app.war

# # This should not be changed
# ENTRYPOINT ["java","-war","app.war"]


# Use an official Java runtime as a parent image
FROM tomcat:10.0

# Set the working directory in the container
WORKDIR /usr/local/tomcat

# Copy the WAR file into the Tomcat webapps directory
COPY ./target/varasidha-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run Tomcat server
CMD ["catalina.sh", "run"]
