Class App.Installer
{

XData setup
{
<Manifest>
  <Default Name="SourceDir" Value="#{$system.Process.CurrentDirectory()}src"/>
  <Default Name="Namespace" Value="IRISAPP"/>
  <Default Name="app" Value="irisapp" />
  <Default Name="restapp" Value="/rest-test" />

  <Namespace Name="${Namespace}" Code="${Namespace}" Data="${Namespace}" Create="yes">

    <Configuration>
      <Database Name="${Namespace}" Dir="/opt/${app}/data" Create="yes" Resource="%DB_${Namespace}"/>
    </Configuration>

  </Namespace>

  <Invoke Class="App.Installer" Method="CreateTestUser" CheckStatus="1">
  </Invoke>

</Manifest>
}

ClassMethod CreateTestUser() As %Status
{
  zn "%SYS"
  set sc1 = ##class(Security.Users).Create("testuser", "%All", "password", , , , , 1)

  zn "IRISAPP"
  set sc2 = ##class(EnsLib.Workflow.UserDefinition).CreateUser("testuser")
  set sc3 = ##class(EnsLib.Workflow.RoleDefinition).CreateRole("testrole")
  set sc4 = ##class(EnsLib.Workflow.RoleDefinition).AddUserToRole("testrole", "testuser")

  return $$$ADDSC($$$ADDSC(sc1, sc2),$$$ADDSC(sc3, sc4))
}

ClassMethod setup(ByRef pVars, pLogLevel As %Integer = 3, pInstaller As %Installer.Installer, pLogger As %Installer.AbstractLogger) As %Status [ CodeMode = objectgenerator, Internal ]
{
  #; Let XGL document generate code for this method. 
  Quit ##class(%Installer.Manifest).%Generate(%compiledclass, %code, "setup")
}

}
