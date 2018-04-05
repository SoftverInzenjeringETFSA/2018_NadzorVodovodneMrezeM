package ba.unsa.etf.rma.lusi.vodovodnamreza;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Lusi on 4/5/2018.
 */

public class prijavljeni_pushnotifikacija extends AppCompatActivity {
    public List<izmjena> izmjene=new ArrayList<izmjena>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.prijavljeni_pushnotifikacije);

        popuniListu();
        ArrayAdapter<izmjena> adapter = new myListAdapter();
        ListView list = (ListView) findViewById(R.id.listView2);
        list.setAdapter(adapter);


    }

    private void popuniListu(){
    izmjena i=new izmjena("Promjena nivoa vode","Nerkeza Smajlagica","5","2","05.04.2018.","Lusi Musinovic");
        izmjene.add(i);
    }
    private class myListAdapter extends ArrayAdapter<izmjena>{
        public  myListAdapter(){
            super(prijavljeni_pushnotifikacija.this,R.layout.element_liste_notifikacije,izmjene);

        }

        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
            //Da se osiguramo da imamo view s kojim cemo radit
            View itemView=convertView;
            if(itemView==null){
                itemView=getLayoutInflater().inflate(R.layout.element_liste_notifikacije,parent,false);
            }

            izmjena trenutnaIzmjena=izmjene.get(position);
            EditText korisnik=(EditText) itemView.findViewById(R.id.editText6) ;
            EditText datum=(EditText) itemView.findViewById(R.id.editText2) ;
            EditText naziv=(EditText) itemView.findViewById(R.id.editText5) ;
            EditText lokacija=(EditText) itemView.findViewById(R.id.editText4) ;
            EditText nivo=(EditText) itemView.findViewById(R.id.editText3) ;
            EditText broj=(EditText) itemView.findViewById(R.id.editText1) ;
            korisnik.setText(trenutnaIzmjena.getKorisnik());


            return itemView;

        }
    }
}
