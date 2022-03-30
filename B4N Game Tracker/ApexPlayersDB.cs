using System.ComponentModel;
namespace B4N_Game_Tracker
{
    class ApexPlayersDB : INotifyPropertyChanged
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Platform { get; set; }
        public int Kills { get; set; }
        public int Death { get; set; }
        public string LastCharacter { get; set; }

        public event PropertyChangedEventHandler PropertyChanged;
        private void NotifyPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
