﻿#pragma checksum "E:\Projects\net 2022\net-2022\RandomFact\Pages\RandomFacts.xaml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "E9847918E4AF1C72CB4E5725B5483CE5002EBA4B6E42F2EF66A512CAEC79D9A3"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RandomFact
{
    partial class RandomFacts : 
        global::Windows.UI.Xaml.Controls.Page, 
        global::Windows.UI.Xaml.Markup.IComponentConnector,
        global::Windows.UI.Xaml.Markup.IComponentConnector2
    {
        /// <summary>
        /// Connect()
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 10.0.19041.685")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 2: // Pages\RandomFacts.xaml line 12
                {
                    this.title = (global::Windows.UI.Xaml.Controls.TextBlock)(target);
                }
                break;
            case 3: // Pages\RandomFacts.xaml line 13
                {
                    this.Next_Fact = (global::Windows.UI.Xaml.Controls.Button)(target);
                }
                break;
            case 4: // Pages\RandomFacts.xaml line 14
                {
                    this.Source = (global::Windows.UI.Xaml.Controls.Button)(target);
                }
                break;
            case 5: // Pages\RandomFacts.xaml line 15
                {
                    this.Back = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)this.Back).Click += this.Back_Click;
                }
                break;
            default:
                break;
            }
            this._contentLoaded = true;
        }

        /// <summary>
        /// GetBindingConnector(int connectionId, object target)
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 10.0.19041.685")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Windows.UI.Xaml.Markup.IComponentConnector GetBindingConnector(int connectionId, object target)
        {
            global::Windows.UI.Xaml.Markup.IComponentConnector returnValue = null;
            return returnValue;
        }
    }
}

