using System.Diagnostics;
using System.Data.SqlClient;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using System;


// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=234238

namespace B4N_Game_Tracker
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class GlobalOffensive : Page
    {

        private static string username;
        private static string platform = "steam";

        public GlobalOffensive()
        {
            this.InitializeComponent();

        }

        private void UsernameInput(object sender, TextChangedEventArgs e)
        {
            username = Username.Text; // Gets input from textbox and put your info into a string.
        }


        private void Button_Click_Search(object sender, RoutedEventArgs e)
        {
            // Checking if any fields are empty, if so it will print that below.
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(platform))
            {
                UserNameDisplay.Text = "Need to type Username, Platform and Database";
            }
            else
            {

                try
                {
                    FrontPageTitle.Text = "Local Database for CSGO"; // Just so it is easier to see that the local database is the chosen one.

                    SqlConnectionStringBuilder connStringBuilder = new SqlConnectionStringBuilder
                    {
                        DataSource = @"donau.hiof.no",
                        InitialCatalog = "kristoss",
                        IntegratedSecurity = false,
                        UserID = userId, // UserId on the almost last line in this file.
                        Password = password // Password on the last line in this file. 
                    };
                    SqlConnection conn = new SqlConnection(connStringBuilder.ToString());

                    // Multiple SQL commands used to get information from the local database.
                    SqlCommand cmdUserName = new SqlCommand("SELECT UserName FROM dbo.GametrackerCSGO WHERE UserName LIKE '" + username + "' AND Platform ='" + platform + "'", conn);
                    SqlCommand cmdKills = new SqlCommand("SELECT Kills FROM dbo.GametrackerCSGO WHERE UserName LIKE '" + username + "' AND Platform ='" + platform + "'", conn);
                    SqlCommand cmdDeath = new SqlCommand("SELECT Death FROM dbo.GametrackerCSGO WHERE UserName LIKE '" + username + "' AND Platform ='" + platform + "'", conn);
                    SqlCommand cmdMatchesPlayed = new SqlCommand("SELECT MatchesPlayed FROM dbo.GametrackerCSGO WHERE UserName LIKE '" + username + "' AND Platform ='" + platform + "'", conn);

                    string backupInfo = "No info in database or recived..."; // If not any information recived, it will print out backup information on the frontpage.
                    var kills = backupInfo;
                    var death = backupInfo;
                    var matchesPlayed = backupInfo;
                    var userDisplay = backupInfo;

                    // For loop to use SQL command above to get user info.
                    for (int i = 0; i < 4; i++)
                    {
                        switch (i)
                        {
                            case 0:
                                conn.Open();
                                userDisplay = (string)cmdUserName.ExecuteScalar();
                                conn.Close();
                                break;
                            case 1:
                                conn.Open();
                                var killsResult = cmdKills.ExecuteScalar();
                                if (killsResult == null) // If it can't find info it will print backupInfo.
                                { //  Had to use if statement because it should get a Int, but the code didn't like that.
                                    kills = backupInfo;
                                }
                                else
                                {
                                    kills = killsResult.ToString();
                                }
                                conn.Close();
                                break;
                            case 2:
                                conn.Open();
                                var deathResult = cmdDeath.ExecuteScalar();
                                if (deathResult == null) // Same as case 1
                                {
                                    death = backupInfo;
                                }
                                else
                                {
                                    death = deathResult.ToString();
                                }
                                conn.Close();

                                break;
                            case 3:
                                conn.Open();
                                var matchesPlay = cmdMatchesPlayed.ExecuteScalar();
                                if (matchesPlay == null)
                                {
                                    matchesPlayed = backupInfo;
                                }
                                else
                                {
                                    matchesPlayed = matchesPlay.ToString();
                                }
                                conn.Close();
                                break;
                        }

                    }
                    // Field used to show info on the front page
                    UserNameDisplay.Text = (string)userDisplay;
                    KillsDisplay.Text = kills;
                    DeathDisplay.Text = death;
                    matchesPlayedDisplay.Text = matchesPlayed;
                }
                catch (Exception error)
                {
                    Debug.WriteLine("Error : " + error.Message);
                    UserNameDisplay.Text = "This username : " + username + " does not exist in database on choosen platform or database";
                    // If any error it prints it in the console, and if it can't find username in chosen platform/database, it will show it on the fontpage
                }


            }
        }

        private void Button_Back(object sender, RoutedEventArgs e)
        {
            this.Frame.Navigate(typeof(MainPage));

        }


        // password and userID to one of our local database. 
        private static string userId = "kristoss";
        private static string password = "Ed:txh6B";

        private void KillsDisplay_SelectionChanged(object sender, RoutedEventArgs e)
        {

        }

        private void TextBlock_SelectionChanged(object sender, RoutedEventArgs e)
        {

        }

        private void TextBlock_SelectionChanged_1(object sender, RoutedEventArgs e)
        {

        }

    }
}
